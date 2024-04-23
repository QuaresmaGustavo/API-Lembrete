using APIlembrete.Data;
using lembreteAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace lembreteAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LembretesController : ControllerBase
    {
        private readonly LembreteDbcontext _context;

        public LembretesController(LembreteDbcontext context)
        {
            _context = context;
        }

        // GET: api/Lembretes
        [HttpGet("/all")]
        public async Task<ActionResult<IEnumerable<Lembrete>>> GetLembrete()
        {
            if (_context.Lembrete == null)
            {
                return NotFound();
            }
            return await _context.Lembrete.ToListAsync();
        }

        // POST: api/Lembretes/cadastrar
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("/insert")]
        public async Task<ActionResult<Lembrete>> PostLembrete(Lembrete lembrete)
        {
            if (_context.Lembrete == null)
            {
                return Problem("Entity set 'APIDbcontext.Lembrete'  is null.");
            }
            _context.Lembrete.Add(lembrete);
            await _context.SaveChangesAsync();

            return lembrete;
        }

        // DELETE: api/Lembretes/deletar/5
        [HttpDelete("/delete/{id}")]
        public async Task<IActionResult> DeleteLembrete(int id)
        {
            if (_context.Lembrete == null)
            {
                return NotFound();
            }
            var lembrete = await _context.Lembrete.FindAsync(id);
            if (lembrete == null)
            {
                return NotFound();
            }

            _context.Lembrete.Remove(lembrete);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LembreteExists(int id)
        {
            return (_context.Lembrete?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}

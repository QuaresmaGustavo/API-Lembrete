using APIlembrete.Data;
using lembreteAPI.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lembreteAPI.Service
{
    public class LembreteService
    {
            private readonly LembreteDbcontext _context;

            public LembreteService(LembreteDbcontext context)
            {
                _context = context;
            }

            public async Task<ActionResult<IEnumerable<Lembrete>>> GetLembrete(){
                return await _context.Lembrete.ToListAsync();
            }

            public async Task<ActionResult<Lembrete>> PostLembrete(Lembrete lembrete)
            {
                _context.Lembrete.Add(lembrete);
                await _context.SaveChangesAsync();

                return lembrete;
            }

            public async Task<IActionResult> DeleteLembrete(int id)
            {
                var lembrete = await _context.Lembrete.FindAsync(id);

                if (lembrete == null){
                return new NotFoundResult();
                }

                _context.Lembrete.Remove(lembrete);
                await _context.SaveChangesAsync();

                return new OkObjectResult(new { message = "Lembrete removido com sucesso" });
        }
    }
}

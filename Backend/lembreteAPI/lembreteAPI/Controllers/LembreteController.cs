using APIlembrete.Data;
using lembreteAPI.Migrations;
using lembreteAPI.Models;
using lembreteAPI.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace lembreteAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LembretesController : ControllerBase
    {
        private readonly LembreteService lembreteService;

        public LembretesController(LembreteService lembreteService)
        {
            this.lembreteService = lembreteService;
        }

        // GET: api/Lembretes
        [HttpGet()]
        public async Task<ActionResult<IEnumerable<Lembrete>>> GetLembrete(){
            return await lembreteService.GetLembrete();
        }

        // POST: api/Lembretes
        [HttpPost()]
        public async Task<ActionResult<Lembrete>> PostLembrete([FromBody] Lembrete lembrete){
            return await lembreteService.PostLembrete(lembrete);
        }

        // DELETE: api/Lembretes/5
        [HttpDelete()]
        public async Task<IActionResult> DeleteLembrete(int id){
            return await lembreteService.DeleteLembrete(id);
        }
    }
}

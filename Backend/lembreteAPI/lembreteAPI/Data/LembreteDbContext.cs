using lembreteAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace APIlembrete.Data
{
    public class LembreteDbcontext : DbContext
    {
        public LembreteDbcontext(DbContextOptions<LembreteDbcontext> options) : base(options){}

        public DbSet<Lembrete> Lembrete { get; set; }
    }
}

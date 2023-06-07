using Microsoft.EntityFrameworkCore;

namespace OrdersApi.Models
{
    public class OrderDbContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }

        public OrderDbContext(bool createDB = false) : base()

        {
            if (createDB)
            {
                Database.EnsureDeleted();
                Database.EnsureCreated();
            }

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=OrdersDb;Trusted_Connection=True;");
        }
    }
}

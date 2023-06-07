using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrdersApi.Models;

namespace OrdersApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class OrderController : ControllerBase
    {
        private readonly OrderDbContext _dbContext;

        public OrderController(OrderDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpPost]
        public IActionResult CreateOrder([FromBody] Order order)
        {
            // Проверка и сохранение заказа в базу данных с помощью Entity Framework
            _dbContext.Orders.Add(order);
            _dbContext.SaveChanges();

            Console.WriteLine($"Заказ успешно сохранен. OrderId: {order.Id}");

            return Ok(order);
        }


        [HttpGet]
        public IActionResult GetOrders()
        {
            // Получение списка заказов из базы данных
            var orders = _dbContext.Orders.ToList();
            return Ok(orders);
        }
    }
}

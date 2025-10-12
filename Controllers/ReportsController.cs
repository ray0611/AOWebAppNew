using AOWebApp.Data;
using Microsoft.AspNetCore.Mvc;

namespace AOWebApp.Controllers
{
    public class ReportsController : Controller
    {
        private readonly AmazonOrdersDbContext _context;

        public ReportsController(AmazonOrdersDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View("AnnualSalesReport");
        }
    }
}

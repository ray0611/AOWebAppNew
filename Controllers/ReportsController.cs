using AOWebApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

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
            var yearList = _context.CustomerOrders
                .Select(co => co.OrderDate.Year)
                .Distinct()
                .OrderByDescending(co=>co)
                .ToList();
            return View("AnnualSalesReport", new SelectList(yearList));
        }
    }
}

using AOWebApp.Models;

namespace AOWebApp.ViewModels
{
    public class ItemDetailViewModel
    {
        public Item TheItem { get; set; }
        public int ReviewCount { get; set; }
        public double AverageRating { get; set; }
    }
}

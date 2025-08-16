﻿using AOWebApp.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace AOWebApp.ViewModels
{
    public class ItemSearchViewModel
    {
        public string SearchText { get; set; }
        public int? CategoryId { get; set; }
        public SelectList? CategoryList { get; set; }
        public List<Item> ItemList { get; set; } = new();

    }
}

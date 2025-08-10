using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AOWebApp.Models;

public partial class Item
{
    public int ItemId { get; set; }

    [Required]
    [StringLength(150)]
    public string ItemName { get; set; } = null!;

    [Required]
    public string ItemDescription { get; set; } = null!;

    [Required]
    [Column(TypeName = "decimal(10, 2)")]
    public decimal ItemCost { get; set; }

    [Required]
    public string ItemImage { get; set; } = null!;

    public int? CategoryId { get; set; }

    public virtual ItemCategory? Category { get; set; }
    public virtual ICollection<ItemMarkupHistory> ItemMarkupHistories { get; set; } = new List<ItemMarkupHistory>();
    public virtual ICollection<ItemsInOrder> ItemsInOrders { get; set; } = new List<ItemsInOrder>();
    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
}

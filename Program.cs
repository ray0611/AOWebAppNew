using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using AOWebApp.Data;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages().AddRazorRuntimeCompilation();
builder.Services.AddDbContext<AmazonOrdersDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("AmazonOrdersDbContext")
            ?? throw new InvalidOperationException("Connection string 'AmazonOrdersDbContext' not found.")
    )
);
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseCors(b =>
{
    b.AllowAnyMethod();
    b.AllowAnyOrigin();
    b.AllowAnyHeader();
}
);

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

using System;
using System.IO;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using ServiceManagementMicroservice.DataAccess;
using ServiceManagementMicroservice.Domain.Mappers;
using ServiceManagementMicroservice.Repository;

namespace ServiceManagementMicroservice
{
   public class Startup
   {
      public Startup(IConfiguration configuration)
      {
         Configuration = configuration;
      }

      public IConfiguration Configuration { get; }

      // This method gets called by the runtime. Use this method to add services to the container.
      // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
      public void ConfigureServices(IServiceCollection services)
      {
         services.AddRouting();

         services.AddDbContext<ServiceContext>(options =>
         {
            options.UseSqlServer(Configuration.GetConnectionString("Default"));
         });

         services.AddSwaggerGen(options =>
         {
             options.SwaggerDoc("v1",
                 new OpenApiInfo
                 {
                     Title = "ServiceManagement API",
                     Version = "1",
                     Description = "ServiceManagement API"
                 });
             //include xml comments
             var xmlCommentFile = $"{Assembly.GetEntryAssembly().GetName().Name}.xml";
             var xmlCommentsFullPath = Path.Combine(AppContext.BaseDirectory, xmlCommentFile);
             options.IncludeXmlComments(xmlCommentsFullPath);
         });

         services.AddControllers();
         services.AddScoped<IServiceRepository, ServiceRepository>();
         services.AddAutoMapper(typeof(ServiceMapper));
      }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
      {
         if (env.IsDevelopment())
         {
            app.UseDeveloperExceptionPage();
         }

         app.UseRouting();

         app.UseEndpoints(endpoints =>
         {
            endpoints.MapGet("/", async context =>
               {
                await context.Response.WriteAsync("Hello World!");
             });
         });
      }
   }
}

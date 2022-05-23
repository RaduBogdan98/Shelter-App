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
using SystemManagementMicroservice.DataAccess;
using SystemManagementMicroservice.Domain.Mappers;
using SystemManagementMicroservice.Repository;
using Microsoft.OpenApi.Models;

namespace SystemManagementMicroservice
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

         services.AddDbContext<ProviderRequestContext>(options =>
         {
            options.UseSqlServer(Configuration.GetConnectionString("Default"));
         });

         services.AddSwaggerGen(options =>
         {
            options.SwaggerDoc("v1",
                new OpenApiInfo
                {
                   Title = "SystemManagement API",
                   Version = "v1",
                   Description = "SystemManagement API"
                });
            //include xml comments
            var xmlCommentFile = $"{Assembly.GetEntryAssembly().GetName().Name}.xml";
            var xmlCommentsFullPath = Path.Combine(AppContext.BaseDirectory, xmlCommentFile);
            options.IncludeXmlComments(xmlCommentsFullPath);
         });

         services.AddControllers();
         services.AddScoped<IAdminRepository, AdminRepository>();
         services.AddAutoMapper(typeof(SystemMapper));
      }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
      {
         if (env.IsDevelopment())
         {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SystemManagement API v1"));
         }

         app.UseRouting();

         app.UseEndpoints(endpoints =>
         {
            endpoints.MapControllers();
         });
      }
   }
}

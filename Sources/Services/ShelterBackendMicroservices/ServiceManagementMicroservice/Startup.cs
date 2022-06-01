using System;
using System.IO;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
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
      private readonly string CONNECTION_STRING = "Server=tcp:shelterserv.database.windows.net,1433;Initial Catalog=ServicesDb;Persist Security Info=False;User ID=shelteradmin;Password={PASSWORD};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
      private const string CORS_POLICY_NAME = "_myAllowSpecificOrigins";

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
            options.UseSqlServer(CONNECTION_STRING);
         });

         services.AddSwaggerGen(options =>
         {
             options.SwaggerDoc("services",
                 new OpenApiInfo
                 {
                     Title = "ServiceManagement API",
                     Version = "v1",
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
         services.AddCors(options =>
         {
             options.AddPolicy(CORS_POLICY_NAME, builder =>
                     builder.WithOrigins("http://localhost:3000", "https://localhost:3000")
                         .AllowAnyHeader().AllowAnyMethod().AllowCredentials());
         });
        }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
      {
         if (env.IsDevelopment())
         {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(x => x.SwaggerEndpoint("/swagger/services/swagger.json", "ServiceManagement API v1"));
         }

         app.UseRouting();

         app.UseCors(CORS_POLICY_NAME);

         app.UseEndpoints(endpoints =>
         {
            endpoints.MapControllers();
         });
      }
   }
}

using System;
using System.IO;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using UserManagementMicroservice.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Models;
using UserManagementMicroservice.Domain.Mappers;
using UserManagementMicroservice.Repository;

namespace UserManagementMicroservice
{
   public class Startup
   {
      private readonly string CONNECTION_STRING = "Server=tcp:shelterserv.database.windows.net,1433;Initial Catalog=UsersDb;Persist Security Info=False;User ID=shelteradmin;Password={PASSWORD};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
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

         services.AddDbContext<UserContext>(options =>
         {
            options.UseSqlServer(CONNECTION_STRING);
         });

         services.AddSwaggerGen(options =>
         {
             options.SwaggerDoc("users",
                 new OpenApiInfo
                 {
                     Title = "UserManagement API",
                     Version = "v1",
                     Description = "UserManagement API"
                 });
            //include xml comments
            var xmlCommentFile = $"{Assembly.GetEntryAssembly().GetName().Name}.xml";
            var xmlCommentsFullPath = Path.Combine(AppContext.BaseDirectory, xmlCommentFile);
            options.IncludeXmlComments(xmlCommentsFullPath);
         });

         services.AddControllers(options => options.SuppressAsyncSuffixInActionNames = false);
         services.AddScoped<IUserRepository, UserRepository>();
         services.AddAutoMapper(typeof(UserMapper));
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
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/users/swagger.json", "UserManagement API v1"));
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

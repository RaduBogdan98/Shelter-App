using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace ApplicationGateway
{
   public class Startup
   {
      private const string CORS_POLICY_NAME = "_myAllowSpecificOrigins";

      public Startup(IConfiguration configuration)
      {
         Configuration = configuration;
      }

      public IConfiguration Configuration { get; }

      // This method gets called by the runtime. Use this method to add services to the container.
      public void ConfigureServices(IServiceCollection services)
      {
         services.AddControllers();
         services.AddSwaggerGen(c =>
         {
            c.SwaggerDoc("gateway", new OpenApiInfo { Title = "ApplicationGateway", Version = "v1" });
         });
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
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/gateway/swagger.json", "ApplicationGateway v1"));
         }

         app.UseHttpsRedirection();

         app.UseRouting();

         app.UseCors(CORS_POLICY_NAME);

         app.UseAuthorization();

         app.UseEndpoints(endpoints =>
         {
            endpoints.MapControllers();
         });
      }
   }
}

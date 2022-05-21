using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using UserManagementMicroservice.Model;

namespace SystemManagementMicroservice.Domain.Dto
{
    public class ProviderRequestDto
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public string Reason { get; set; }
        public User Owner { get; set; }
    }
}

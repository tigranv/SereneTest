
using Serenity.Extensibility;
using System.ComponentModel;

namespace SereneTest15._1.Organization
{
    [NestedPermissionKeys]
    public class PermissionKeys
    {
        [Description("[General]")]
        public const string General = "Organization:General";
        
        [DisplayName("Business Units")]
        public class BusinessUnits
        {
            public const string Management = "Organization:BusinessUnits:Management";
        }

        public class Contacts
        {
            public const string Management = "Organization:Contacts:Management";
        }
    }
}

using Serenity.Services;

namespace SereneTest15._1.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}
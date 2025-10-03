import xwz1 from '../images/shop/mini-cart/xwz-1.png';
import xwz2 from '../images/shop/mini-cart/xwz-2.png';
import xwz3 from '../images/shop/mini-cart/xwz-3.png';

const PricingProducts = [
    {
        id: 1,
        plan: "pricing.mining_equipment_1",
        image: xwz1,
        price: "Mining Equipment", 
        description: "pricing.products.mining-equipment.description",
        link: "/products/Mining%20Equipment",
        features: [
            "pricing.products.mining-equipment.features.1",
            "pricing.products.mining-equipment.features.2",
            "pricing.products.mining-equipment.features.3",
            "pricing.products.mining-equipment.features.4",
            "pricing.products.mining-equipment.features.5",
        ],
    },
    {
        id: 2,
        plan: "pricing.mining_drill_1",
        image: xwz2,
        price: "Mining Drills", 
        description: "pricing.products.mining-drills.description",
        link: "/products/Drilling%20Bit",
        features: [
            "pricing.products.mining-drills.features.1",
            "pricing.products.mining-drills.features.2",
            "pricing.products.mining-drills.features.3",
            "pricing.products.mining-drills.features.4",
            "pricing.products.mining-drills.features.5",
        ],
    },
    {
        id: 3,
        plan: "pricing.heavy_tire_1",
        image: xwz3,
        price: "Heavy Tires", 
        description: "pricing.products.heavy-tires.description",
        link: "/products/Heavy%20Tires",
        features: [
            "pricing.products.heavy-tires.features.1",
            "pricing.products.heavy-tires.features.2",
            "pricing.products.heavy-tires.features.3",
            "pricing.products.heavy-tires.features.4",
            "pricing.products.heavy-tires.features.5",
        ],
    },
];

export default PricingProducts;
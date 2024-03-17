import brands, { title } from "./data";
import { BrandsItems, BrandImageHolder, BrandsHolder, BrandsTitle } from "./Brands.styled";

const Brands = () => {
    return (
        <BrandsHolder>
            <BrandsTitle>{title}</BrandsTitle>
            <BrandsItems>
                {brands.map(brand => (
                    <BrandImageHolder key={brand.id}>
                        <img src={brand.src} alt={brand.alt} />
                    </BrandImageHolder>
                ))}
            </BrandsItems>
        </BrandsHolder>
    )
}

export default Brands;
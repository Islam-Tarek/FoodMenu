import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Categories({ categories, handleCategory }) {
  console.log(`Categories ==>`, categories);

  return (
    <div className="flex border-2 border-solid  mx-4 rounded-2xl bg-orange-100">
      <ul className="m-3 ">
        <Link to="" className="block" onClick={() => handleCategory("All")}>
          <li className="flex align-middle justify-between rounded-2xl px-5 py-3 w-40 text-center font-bold hover:bg-orange-300">
            <span className="relative -bottom-3">All</span>
            <img
              className="w-10 h-10"
              src="data:image/png;base64,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"
              alt="external-fast-food-food-delivery-nawicon-outline-color-nawicon"
            ></img>
          </li>
        </Link>
        {categories?.map((cat) => (
          <Link
            className=""
            key={cat.id}
            onClick={() => handleCategory(cat.name)}
          >
            <li className="flex align-middle justify-between px-5 py-3 rounded-2xl w-auto text-center font-bold hover:bg-orange-300  ">
              <span className="relative -bottom-1.5">{cat.name}</span>

              {cat.name === "Burger" && (
                <img
                  src="data:image/png;base64,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"
                  alt="hamburger-emoji"
                ></img>
              )}
              {cat.name === "Fries" && (
                <img
                  src="data:image/png;base64,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"
                  alt="french-fries-emoji"
                ></img>
              )}
              {cat.name === "Water" && (
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2a7UsUQRzH5y/IF4eiLxNf7F5iM7d6d7uniZHaiWkWBYoSYvjCF/bwIoXshQZ1goZ2goqRICl0FOpFGoWVV1EURuiLqDehkr0S9fSNDzgxc3vLanrdnVcwO/eDLzfc7g37/dw87W8GgP8UUFSKkKDMI1HBISUo81B0OIHRAoVjXhUU5DlgtECqOb/fv68GRn0aBMAbgB9zC3wAGBj1hZRxAQicjwFQdDiJsXDMI7P9JDBqINVoVvtznFTXg021XVSGbfr6yMiQk6hRcza2d0xg1DqmQYBmBwVA7gEGNj9DTEoFFygAPQRBORtsBTOGgwDTshOhqEwTgxalFNtvjWgAiCyt4zj5Ygc+klkUGAdE5ask5KQAHszbjQwBhmle3x2SawwCAUZoPqgjzcM4sbqdbQhSqpSgDXiOMmxzecMyT2S984LOConVbThdhUDqInUCVgKKsps8+FFrMU69cg8fbhiMSMG1AYUgOYOvyZ2AlYCC8os8dHLFTc1MtEqpaFG7grwAWAkkKtvhrvsj0DZgJVDszbO1TEa6d//V1VW8trYWMhESKkHC5Csy0gHY2trCJMgn1wA2NjZ2mFteWsY1VXVUpGxYAOvr6xTA7m4w/MirGRt5/MS4APx+/55jwPnSKs3YuZJKvLKyYlwA/l16NTFJr1syC6lI+fVLHz8Arl2+HsgKVTXhzMomWm64eoMfACdyiul1W4sH25o9tEy+09+ztLRsXAD5x04FADT2Y1vjfVouyC3Zcc+HL9+MC6DN1fnHKq+9tVO7/nH6O9t7BVCQN8kDz87O7QlgcXGRQiAtgfzzxDz5bi/zPUNjwXT5JmAloKg8Iw+dn1dGDfxtN2g/kd+SOgIAlHHAYjboeG4p7n7wNGLzvYPjOD/vjJYVyjJnJQOWAuogHERMmo81AOZygjDKhKhetttebHGUsQkBqoNgMCFa0vcW1w59wsW9byKD4PLSOtgbBIXANEgMFHRP4kuez1Tl/e8jbwkuL3vTIFL7LzFQ2O3D9Q+ncL1nCp/uexcxALphwtpCCOkAxELMAkC8J0UR7wBMB9wUYfb0CIoDUOJdAMXHACU+Ddrj6wCF72kQ8Q7AFF8HdPG9EEK8dwHEOwA779OgnXcAiPcugHgHYOJ9GjRxDGA7AMAdAwBu9k6KQvWsMDnne+CzwuUMnhWGgnyXPHS6xUkNRNcS3PS3pA7aAgSlA7ASUqqUEIuN0aBIXdY06yHAUkgUguwmTTd64/JP0pr+pfnfmtOWMzr1bawAAAAASUVORK5CYII="
                  alt="external-water-bottle-men-lifestyle-dreamcreateicons-outline-color-dreamcreateicons"
                ></img>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

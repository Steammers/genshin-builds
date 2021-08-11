import { memo } from "react";

import StarRarity from "./StarRarity";
import { IMGS_CDN } from "@lib/constants";
import { FoodItem } from "@pages/food";
import Link from "next/link";
import SimpleRarityBox from "./SimpleRarityBox";

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  return (
    <div className="bg-vulcan-800 border border-vulcan-700 mb-2 rounded flex flex-col">
      <div className="flex flex-row h-full">
        <div
          className="flex flex-none relative bg-cover rounded rounded-tr-none rounded-br-none items-center justify-center"
          style={{
            backgroundImage: `url(${IMGS_CDN}/bg_${item.rarity}star.png)`,
          }}
        >
          <img
            src={`${IMGS_CDN}/food/${item.id}_${item.type}.png`}
            height={100}
            width={100}
            alt={item.name}
          />
          <div className="absolute bottom-0 bg-gray-900 bg-opacity-50 w-full px-2 py-0.5 items-center justify-center flex">
            <StarRarity
              starClassname="w-4"
              rarity={item.rarity}
              starsSize={42}
            />
          </div>
        </div>
        <div className="ml-1 p-3">
          <div className="flex">
            <h3 className="font-bold text-white">{item.name}</h3>
          </div>
          <p
            className="weapon-bonus"
            dangerouslySetInnerHTML={{
              __html: item.effect,
            }}
          />
          {item.character && (
            <div className="float-right bottom-0 right-0">
              <Link href={`/character/${item.character.id}`}>
                <a>
                  <SimpleRarityBox
                    img={`${IMGS_CDN}/characters/${item.character.id}/${item.character.id}_portrait.png`}
                    rarity={0}
                    className="h-12 w-12"
                  />
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(FoodCard);
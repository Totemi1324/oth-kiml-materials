import { LectureMaterial } from "@/data/materials"

import LectureMaterialCard from "./LectureMaterialCard";

type LectureMaterialListProps = {
    materials: LectureMaterial[],
}

export default function LectureMaterialList({ materials }: LectureMaterialListProps) {
    const currentTime: Date = new Date();
    let shownItems: number = 0;

    return (
        <div className="flex flex-col items-center gap-6">
            {
                materials.map((material, index) => {
                    if (currentTime >= material.unlockTime) {
                        shownItems++;
                        return (
                            <LectureMaterialCard
                                key={index}
                                title={material.title}
                                unitNumber={material.unitNumber}
                                links={material.links}
                            />
                        );
                    }
                    else {
                        return null;
                    }
                })
            }
            {
                shownItems == 0 ? <p className="text-gray-500 text-center">Noch nichts zum Anzeigen...</p> : null
            }
        </div>
    );
}
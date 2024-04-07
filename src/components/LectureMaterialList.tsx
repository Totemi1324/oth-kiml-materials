import { LectureMaterial } from "@/data/materials"

import LectureMaterialCard from "./LectureMaterialCard";

type LectureMaterialListProps = {
    materials: LectureMaterial[],
}

export default function LectureMaterialList({ materials }: LectureMaterialListProps) {
    const currentTime: Date = new Date();

    return (
        <div className="flex flex-col items-center gap-6">
            {
                materials.map((material, index) => {
                    if (/*currentTime >= material.unlockTime*/ true) {
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
        </div>
    );
}
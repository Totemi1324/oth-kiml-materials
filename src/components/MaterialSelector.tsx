import { Accordion, AccordionItem } from "@nextui-org/react";
import { semesterMaterials, LectureMaterial } from "@/data/materials";

import LectureMaterialList from "./LectureMaterialList";

export default function MaterialSelector() {
    return (
        <div className="flex w-full flex-col">
            <Accordion variant="light">
                {
                    semesterMaterials.map((semesterMaterial, i) => {
                        const id: string = semesterMaterial.id;
                        const materials: LectureMaterial[] = semesterMaterial.materials;
                        return (
                            <AccordionItem key={i} aria-label={id} title={id}>
                                <LectureMaterialList materials={materials} />
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>
    );
}
import { AnnotatedLink } from "@/data/materials";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ButtonLinkList from "./ButtonLinkList";

type LectureMaterialCardProps = {
    title: string,
    unitNumber: number,
    links: AnnotatedLink[],
}

export default function LectureMaterialCard({ title, unitNumber, links }: LectureMaterialCardProps) {
    return (
        <Card className="p-2 min-w-[40%]">
            <CardHeader className="flex flex-col items-center text-center">
                <p className="font-bold">{title}</p>
                <p className="text-gray-500 text-sm">Einheit {unitNumber}</p>
            </CardHeader>
            <CardBody className="gap-4">
                {
                    links.map((link, index) => {
                        return (
                            <ButtonLinkList
                                key={index}
                                title={link.title}
                                uri={link.uri}
                            />
                        );
                    })
                }
            </CardBody>
        </Card>
    );
}
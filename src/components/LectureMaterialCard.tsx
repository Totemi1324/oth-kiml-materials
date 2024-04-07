import { AnnotatedLink } from "@/data/materials";
import { Card, CardHeader, CardBody, Button, Link } from "@nextui-org/react";
import { OpenInNewTabIcon } from "@/ui/icons";

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
            <CardBody className="items-start gap-4">
                {
                    links.map((link) => {
                        return (
                            <div className="flex gap-4 items-start">
                                <Link isExternal href={link.uri}>
                                    <Button color="primary" endContent={<OpenInNewTabIcon />}>
                                        {link.title}
                                    </Button>
                                </Link>
                                <Button color="primary" variant="bordered">
                                    Link kopieren
                                </Button>
                            </div>
                        );
                    })
                }
            </CardBody>
        </Card>
    );
}
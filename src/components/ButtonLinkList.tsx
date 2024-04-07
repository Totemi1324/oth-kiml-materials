"use client";

import { useCallback, useState } from 'react';

import { Popover, PopoverTrigger, PopoverContent, Button, Link } from "@nextui-org/react";
import { OpenInNewTabIcon } from '@/ui/icons';
import { AnnotatedLink } from '@/data/materials';

export default function ButtonLinkList({ title, uri }: AnnotatedLink) {
    const [isPopoverOpen, setPopoverOpen] = useState(false);

    const handleCopyLink = useCallback(async (link: string) => {
        try {
            await navigator.clipboard.writeText(link);
            console.log(link);
            setPopoverOpen(true);
            setTimeout(() => setPopoverOpen(false), 3000);
        } catch (e) {

        }
    }, []);

    return (
        <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
            <Link isExternal href={uri}>
                <Button color="primary" endContent={<OpenInNewTabIcon />}>
                    {title}
                </Button>
            </Link>
            <Button color="primary" variant="bordered" onPress={() => handleCopyLink(uri)}>
                Link kopieren
            </Button>
        </div>
    );
}
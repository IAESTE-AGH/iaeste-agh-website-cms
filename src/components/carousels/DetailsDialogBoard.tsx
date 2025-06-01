"use client"

import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel"
import Image from "next/image"

interface DetailsDialogBoardProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    items: {
        page: "Wymiana" | "Dla firm" | "Kontakt"
        section: string
        image: string
        fullname: string
        email: string
        phone_number: string
        position: string
    }[]
    }

export function DetailsDialogBoard({ open, onOpenChange, items }: DetailsDialogBoardProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl p-0">
                <DialogTitle className="text-center text-2xl font-bold mb-4">
                    Lokalizacje i Szczegóły 
                </DialogTitle>
                <Carousel>
                    <CarouselContent>
                        {items.map((item, index) => (
                            <CarouselItem key={index} className="flex flex-col items-center p-4">
                                <Image
                                    src={item.image} alt="Zrzut ekranu" width={300} height={200} />
                                <ul className="text-sm mt-4 space-y-1">
                                <li><strong>Strona:</strong> {item.page}</li>
                                <li><strong>Sekcja:</strong> {item.section}</li>
                                <li><strong>Imię i Nazwisko:</strong> {item.fullname}</li>
                                <li><strong>Numer Telefonu:</strong> {item.phone_number}</li>
                                <li><strong>Email:</strong> <a href={`mailto:${item.email}`} className="text-blue-600 underline">{item.email}</a></li>
                                <li><strong>Stanowisko:</strong> {item.position}</li>
                                </ul>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </DialogContent>
        </Dialog>
    )
}
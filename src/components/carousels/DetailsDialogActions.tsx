"use client"

import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel"
import Image from "next/image"

interface DetailsDialogActionsProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    items: {
        page: "Wymiana" | "Dla firm" | "Kontakt"
        section: string
        image: string
        name: string
        logo: string
        description: string
        coo_fullname: string
        coo_phone_number: string
        coo_email: string
    }[]
    }

export function DetailsDialogActions({ open, onOpenChange, items }: DetailsDialogActionsProps) {
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
                                <li><strong>Nazwa:</strong> {item.name}</li>
                                <li><strong>Logo:</strong> <img src={item.logo} alt="logo" className="h-6 inline" /></li>
                                <li><strong>Opis:</strong> {item.description}</li>
                                <li><strong>Imię i Nazwisko Koordynatora:</strong> {item.coo_fullname}</li>
                                <li><strong>Numer Telefonu Koordynatora:</strong> {item.coo_phone_number}</li>
                                <li><strong>Email Koordynatora:</strong> <a href={`mailto:${item.coo_email}`} className="text-blue-600 underline">{item.coo_email}</a></li>
                                </ul>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </DialogContent>
        </Dialog>
    )
}
"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function TrainerModal() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = true;

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Trainer</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Trainer</DialogTitle>
                    </DialogHeader>
                    <TrainerForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">Add Trainer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Add Trainer</DrawerTitle>
                    <DrawerDescription>
                        Add new trainer details here.
                    </DrawerDescription>
                </DrawerHeader>
                <TrainerForm className="px-4" />
                {/* <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    )
}

function TrainerForm({ className }) {
    return (
        <form className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Label htmlFor="trainerName">Trainer Name</Label>
                <Input required type="text" id="trainerName" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input required id="specialization" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="experience">Experience (in years)</Label>
                <Input required id="experience" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select required>
                    <SelectTrigger>
                        <SelectValue placeholder="active - inactive" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button type="submit">Add Trainer</Button>
        </form>
    )
}

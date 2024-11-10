"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
// import { useMedAdd Courseom "@/hooks/use-media-query"
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
    DrawerFooter,
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


export function CourseModal() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = true;

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Course</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Course</DialogTitle>
                        {/* <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
                    </DialogHeader>
                    <CourseForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">Add Course</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Add Course</DrawerTitle>
                    <DrawerDescription>
                        you can add course
                    </DrawerDescription>
                </DrawerHeader>
                <CourseForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function CourseForm({ className }) {
    return (
        <form className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Label htmlFor="course">course</Label>
                <Input required type="text" id="course" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="duration">duration</Label>
                <Input required id="duration" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input required id="description" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Status</Label>
                <Select required>
                    <SelectTrigger>
                        <SelectValue placeholder="active - not-active" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="not-active">Not Active</SelectItem>
                        
                    </SelectContent>
                </Select>

            </div>
            <Button type="submit">Add Course required</Button>
        </form>
    )
}
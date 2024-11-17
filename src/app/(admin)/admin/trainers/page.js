import { TrainersTable } from "@/components/DataTables/TrainerTable";
import { TrainerDialog, TrainerModal } from "@/components/Dialogs/TrainerModal";


export default function Trainers(){
    return(
        <div className="min-h-screen p-10">
             <div className="flex justify-between my-2">
            <h1 className="text-3xl font-bold text-center">Trainersss</h1>
                <TrainerModal/>
            </div>
            <TrainersTable/>
        </div>
    )
}
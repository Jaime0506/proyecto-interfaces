import { supabase } from "../supabase/supabase"
import { ClassroomFormType } from "../types"

export const CreateClassroom = async (study_space: ClassroomFormType, toggleIsLoading: () => void) => {
    const { data, error } = await supabase.from('study_spaces').insert({
        ...study_space
    }).select()

    if (error) {
        console.log(error.message)
        return
    }

    if (!data) {
        console.log("Algo paso")
        return
    }

    console.log(data)
    console.log("Funciono")
    toggleIsLoading()
}
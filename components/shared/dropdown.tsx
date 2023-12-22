import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import { startTransition, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "../ui/input";

type DropdownProps = {
  value: string;
  onChangeHandler?: (value: string) => void;
};

const DropDown = ({ value, onChangeHandler }: DropdownProps) => {
 
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState("")

  const handleAddCategory = () => {
    
  }


  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger
        className="w-full bgrey h-[54px] placeholder:text-grey-500 rounded-full p-regular-16 px-5 py-3 
      border-none focus-visible:ring-transparent focus:ring-transparent !important"
      >
        <SelectValue placeholder="Catégories" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category._id}
              className="py-3 cursor-pointer focus:bg-primary-50 p-regular-14"
            >
              {category.name}
            </SelectItem>
          ))}

        <AlertDialog>
          <AlertDialogTrigger className="p-medium flex w-full rounded-sm py-3 pl-8 text-purple-500
          hover:bg-primary-50 focus:text-purple-900">Open</AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Nouveau Catégorie</AlertDialogTitle>
              <AlertDialogDescription>
                <Input type="text" placeholder="Nom de la catégorie" className="mt-3 bg-grey-50 h-[54px] 
                focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full 
                p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent !important" 
                onChange={(e) => setNewCategory(e.target.value)} />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => startTransition(handleAddCategory) }>Ajouter</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  );
};

export default DropDown;

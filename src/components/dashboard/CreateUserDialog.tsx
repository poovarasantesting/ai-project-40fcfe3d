import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateUserForm } from "./CreateUserForm";
import { useState } from "react";
import { UserPlus } from "lucide-react";

interface CreateUserDialogProps {
  onUserCreated: () => void;
}

export function CreateUserDialog({ onUserCreated }: CreateUserDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    onUserCreated();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <CreateUserForm 
          onClose={() => setOpen(false)}
          onSuccess={handleSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
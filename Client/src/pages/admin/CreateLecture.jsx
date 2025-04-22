import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const CreateLecture = () => {
  return (
    <div className="p-4 md:p-10 md:pr-20 h-screen">
      <h1 className="text-2xl font-bold mb-2">
        Lets Add <span className="text-blue-500">Lecture</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia vitae
        eum nobis animi dolorum labore, officiis quod impedit?
      </p>
      <div className="mt-10 space-y-5">
        <div>
          <Label>Title</Label>
          <Input type="text" placeholder="Your Lecture Name" className="bg-white" />
        </div>
        <div className="flex gap-2 ">
          <Button variant="outline">Back to Course</Button>
          <Button className="bg-gray-800 hover:bg-gray-800">Create Lecture</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateLecture;

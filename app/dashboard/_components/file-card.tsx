import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import { formatRelative } from "date-fns";
  
  import { Doc } from "../../../convex/_generated/dataModel";
  import { Code, FileTextIcon, GanttChartIcon, ImageIcon } from "lucide-react";
  import { ReactNode } from "react";
  import { useQuery } from "convex/react";
  import { api } from "../../../convex/_generated/api";
  import { FileCardActions } from "./file-actions";
  
  export function FileCard({
    file,
  }: {
    file: Doc<"files"> & { isFavorited: boolean; url: string | null };
  }) {
    const userProfile = useQuery(api.users.getUserProfile, {
      userId: file.userId,
    });
  
    const typeIcons = {
      image: <ImageIcon />,
      doc: <FileTextIcon />,
      txt: <GanttChartIcon />,
    } as Record<Doc<"files">["type"], ReactNode>;
  
    return (
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex gap-2 text-base font-normal">
            <div className="flex justify-center">{typeIcons[file.type]}</div>{" "}
            {file.name}
          </CardTitle>
          <div className="absolute top-2 right-2">
            <FileCardActions isFavorited={file.isFavorited} file={file} />
          </div>
        </CardHeader>
        <CardContent className="h-[200px] flex justify-center items-center">
          {file.type === "image" && file.url && (
            <img alt={file.name} width="200" height="100" src={file.url} />
          )}

          {file.type === "video" && file.url && (
            <video width="200" height="100" src={file.url} />
          )}          
          {file.type === "audio" && file.url && (
            <audio src={file.url} />
          )}
          {file.type === "code" && <Code/>}  
          {file.type === "txt" && <GanttChartIcon className="w-20 h-20" />}
          {file.type === "doc" && <FileTextIcon className="w-20 h-20" />}
        </CardContent>
        <CardFooter className="flex justify-between gap-3">
          <div className="flex gap-2 text-xs text-gray-700 w-40 items-center">
            <Avatar className="w-6 h-6">
              <AvatarImage src={userProfile?.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {userProfile?.name}
          </div>
          <div className="text-xs text-gray-700">
            Added: {formatRelative(new Date(file._creationTime), new Date())}
          </div>
        </CardFooter>
      </Card>
    );
  }
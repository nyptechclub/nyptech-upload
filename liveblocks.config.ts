import { 
  createClient,
  LiveList,
  LiveMap,
  LiveObject,
} from "@liveblocks/client";
import { createLiveblocksContext, createRoomContext } from "@liveblocks/react";

import { Layer, Color } from "@/types/canvas";  
const client = createClient({
  throttle: 16,
  authEndpoint: "/api/liveblocks-auth",
  async resolveUsers({ userIds }) {
    return [];
  },
  async resolveMentionSuggestions({ text, roomId }) {      
    return [];
  },
});

type Presence = {
  cursor: { x: number, y: number } | null,
  selection: string[];
  pencilDraft: [x: number, y: number, pressure: number][] | null;
  penColor: Color | null;
};

type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};

type RoomEvent = {

};

export type ThreadMetadata = {

};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersListener,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
    useThreadSubscription,
    useMarkThreadAsRead,
    useRoomNotificationSettings,
    useUpdateRoomNotificationSettings,
  
    // These hooks can be exported from either context
    // useUser,
    // useRoomInfo
  }
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(client);

// Project-level hooks, use inside `LiveblocksProvider`
export const {
  suspense: {
    LiveblocksProvider,
    useMarkInboxNotificationAsRead,
    useMarkAllInboxNotificationsAsRead,
    useInboxNotifications,
    useUnreadInboxNotificationsCount,
  
    // These hooks can be exported from either context
    useUser,
    useRoomInfo,
  }
} = createLiveblocksContext<UserMeta, ThreadMetadata>(client);

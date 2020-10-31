import {MapObject} from './MapObject'

export type ContentType = 'img' | 'text' | 'youtube' | 'iframe' | 'screen' | ''

export interface SharedContent extends MapObject {
  id: string                      //  unique ID (generated by participant id + number)
  zorder: number                  //  unix timestamp when shared or moved to top.
  name: string                    //  name or title of the content.
  type: ContentType               //  content type ('img', etc)
  url: string                     //  url or text to share
  size: [number, number]          //  current size of the content
  originalSize: [number, number]  //  original size of the content or [0, 0]
  pinned: boolean                 //  pinned (not resizable or resizable)
}

export interface ParticipantContents{
  participantId: string
  myContents: Map<string, SharedContent>
  updateRequest: Map<string, SharedContent>
  removeRequest: Set<string>
}

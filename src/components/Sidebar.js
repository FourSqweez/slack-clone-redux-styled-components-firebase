import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from '@material-ui/icons'
import { SidebarContainer, SidebarHeader, SidebarInfo } from './Sidebar.style'
import SideOption from './SideOption'
import { db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection('rooms'))

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>React talk</h2>
          <h3>
            <FiberManualRecord />
            four sqweez
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>

      <SideOption Icon={InsertComment} title="Threads" />
      <SideOption Icon={Inbox} title="Mentions & reactions" />
      <SideOption Icon={Drafts} title="Saved items" />
      <SideOption Icon={BookmarkBorder} title="Channel browser" />
      <SideOption Icon={PeopleAlt} title="People & user groups" />
      <SideOption Icon={Apps} title="Apps" />
      <SideOption Icon={FileCopy} title="File browser" />
      <SideOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SideOption Icon={ExpandMore} title="Show more" />
      <hr />
      <SideOption Icon={Add} addChannelOption title="Add Channel" />

      {console.log(channels)}

      {channels?.docs.map((doc) => (
        <SideOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  )
}

import NotepadContextProvider from './notepad-context'

const ContextsProvider: React.FC = ({ children }) => {
  return <NotepadContextProvider>{children}</NotepadContextProvider>
}

export default ContextsProvider

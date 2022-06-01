import { useRouter } from 'next/router'
import { useNotepadContext } from '../contexts/notepad-context';

const useNoteNavigate = () => {
  const router = useRouter();
  const { loadingGetNotepad, loadingSetNotepad, setNotepadSlug } = useNotepadContext();

  const go = (noteName: string) => {
    if (loadingGetNotepad || loadingSetNotepad) return;

    // setNotepadTextValue('')
    setNotepadSlug(noteName)
    router.push(`/${noteName}`)
  }

  return {
    go,
  }
}

export default useNoteNavigate

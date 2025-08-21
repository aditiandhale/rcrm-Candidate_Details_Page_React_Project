import React, { createContext, useContext, useEffect, useState } from 'react'
import { Candidate } from '../types'
import * as api from '../api/mockApi'

type CandidateContextType = {
  candidate: Candidate | null
  setCandidate: (c: Candidate) => void
  refresh: () => Promise<void>
  update: (patch: Partial<Candidate>) => Promise<void>
}

const CandidateContext = createContext<CandidateContextType | undefined>(undefined)

export const CandidateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [candidate, setCandidate] = useState<Candidate | null>(null)

  useEffect(() => {
    api.fetchCandidate().then((c) => setCandidate(c))
  }, [])

  const refresh = async () => {
    const c = await api.fetchCandidate()
    setCandidate(c)
  }

  const update = async (patch: Partial<Candidate>) => {
    const updated = await api.updateCandidate(patch)
    setCandidate(updated)
  }

  return (
    <CandidateContext.Provider value={{ candidate, setCandidate, refresh, update }}>
      {children}
    </CandidateContext.Provider>
  )
}

export function useCandidate() {
  const ctx = useContext(CandidateContext)
  if (!ctx) throw new Error('useCandidate must be used inside CandidateProvider')
  return ctx
}
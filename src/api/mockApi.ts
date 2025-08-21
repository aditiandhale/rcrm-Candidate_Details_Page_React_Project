import { Candidate } from '../types'
import candidateData from '../data/candidate.json'

export function fetchCandidate(): Promise<Candidate> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(candidateData), 450)
    })
}

export function updateCandidate(data: Partial<Candidate>): Promise<Candidate> {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Merge updates into JSON object in-memory
            Object.assign(candidateData, data)
            resolve(candidateData)
        }, 350)
    })
}

export const setNome = (novoNome) => (
    {
        type: 'set-nome',
        payload: novoNome
    }
)

export const setEmail = (novoEmail) => (
    {
        type: 'set-email',
        payload: novoEmail
    }
)

export const setSenha = (novaSenha) => (
    {
        type: 'set-senha',
        payload: novaSenha
    }
)
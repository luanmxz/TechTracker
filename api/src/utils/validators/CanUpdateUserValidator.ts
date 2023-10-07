function canUpdateUserValidate(isBanned: boolean, isActive: boolean): void{

    if(isBanned) throw new Error('Não pode alterar informações. Motivo: Usuário Banido.');
    if(!isActive) throw new Error('Não pode alterar informações. Motivo: Usuário inativo.');

}

export { canUpdateUserValidate };
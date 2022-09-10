/*
 * Transformar notas escolares
 *
 * Crie um algoritmo que transforme as notas do sistema
 * númerico para sistema de notas em caracteres tipo A, B, C, F.
 *
 * de 90 para cima - A
 * entre 80 - 89   - B
 * entre 70 - 79   - C
 * entre 60 - 69  - D
 * menor que 60    - F
 *
 */

function realizarProva(minhaNota) {
  let notaA = minhaNota >= 90;
  let notaB = minhaNota >= 80 && minhaNota < 90;
  let notaC = minhaNota >= 70 && minhaNota < 80;
  let notaD = minhaNota >= 60 && minhaNota < 70;
  let notaF = minhaNota < 60 && minhaNota >= 0;

  if (notaA) console.log("Sua nota foi A.");
  else if (notaB) console.log("Sua nota foi B");
  else if (notaC) console.log("Sua nota foi C.");
  else if (notaD) console.log("Sua nota foi D.");
  else if (notaF) console.log("Sua nota foi F.");
  else console.log("Nota inválida.")
}

realizarProva((97));

realizarProva((88));

realizarProva((76));

realizarProva((67));

realizarProva((54));

realizarProva((-98));

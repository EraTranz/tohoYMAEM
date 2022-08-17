// Regexps in this file come from https://github.com/mammothrider/ERATranslateHelper/blob/master/config-example.ini

/**
  [TranslatePattern]
  1 = ^[\s]*PRINT[^\s]*[\s]+(.+)
  2 = ^[\s]*DATA[^\s]*[\s]+(.+)
  3 = ^[\s]*LOCAL[S]?\s?\+?\=\s?(.+)
  4 = ^[\s]*CALL[\s]PRINT[^@]*@(.+)
  5 = ^[\s]*CALL[\s]KPRINT[\w\s,"]+\"(.+)\"
 */
export const text = [
  /^\s*(?:PRINT|DATA)\S*\s+(.+)/,
  /^\s*LOCAL\s\+=\s?(.+)/,
  /^\s*CALL\sPRINT[^@]*@(.+)/,
  /^\s*CALL\sKPRINT[\w\s,"]+"(.+)"/,
]

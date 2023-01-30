unSafedisc v1.5.5 - (c) r!sc & dec0de12 & blackcheck, september 2000 - http://csir.cjb.net

unSafedisc is a tool to remove SAFEDISC copy protection from windows executables.
it WILL NOT remove any other checks/protection. (i.e. sims v1.2, <insert other game names here>)

unSafedisc requires ORIGINAL *.exe/*.icd/dplayerx.dll to be in the same dir ..
 (safedisc loader(150-350kb exe), encrypted game file & dplayerx.dll)

btw, this DOESNT mean the same dir as unSafedisc...

if u see this error message - 'safedisc loader is dodgy, aborting!', it means exactly that, you
dont have an ORIGINAL safedisc loader, and thus, unSafedisc will NOT work.

please see history.txt for the latest information

-

tested safedisc versions ..

dplayerx.dll
81,408    ; r0, sept'98, jump table for api's, tom clancys rainbow six
155,648   ; r1, apr'99, api mangling two push version, roller coaster tycoon
156,160   ; r1, aug'99, two push version, tiberian sun1.08, darkstone1.02, dungeon keeper, system shock 2
163,328   ; r2, three push?, encrypted asciiz's, tiberian sun1.13, darkstone1.03, cutthroats, aoe2
165,888   ; r2, darkstone1.04/1.05b, half life opposing forces, abomination r1/r2.6.4, unreal tournyv4
172,544   ; r3, jan'00, api decided by calling address, darkstone1.05eu, unreal tourny v4.13
173,568   ; r3, apr'00, slight variation on previous version, messiah01, f1 2000, thief2v1.18
136,704   ; r4, may-july'00, 128bit keys, api wrapper changes slightly for every game, mdk2, f1wgp, ig2v105b
138,752   ; r4, july'00, r4, but has another layer of encryption on the *.icd, grand prix 3, gunship!

-

maybe some other versions too ..
takes less than 5 seconds to brute r2 / r3 / r4 .. r0 and r1 take much longer

decrypting r0/r1, two exe's are created, as sometimes the api demangling key differs from the
encryption key... "add     [decrypt_key], 80000000h    ; temp key for re-demangling rdata"

please try both executables created, 'testme.exe' & 'testme2!.exe', delete the one that crashes

-
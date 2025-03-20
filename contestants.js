            // Player Data
            const players = [
            { playerName: 'Myakka Shoes', qid: 'Q450675', round: 1 },
        	{ playerName: 'Myakka_Shoes', qid: 'Q774414', round: 2 },
		{ playerName: 'Myakka_Shoes', qid: 'Q142546', round: 3 },
		{ playerName: 'Myakka_Shoes', qid: 'Q179051', round: 4 },
		{ playerName: 'Myakka_Shoes', qid: 'Q236212', round: 5 },
		{ playerName: 'Myakka_Shoes', qid: 'Q16297', round: 6 },
		{ playerName: 'Myakka_Shoes', qid: 'Q238877', round: 7 },
		{ playerName: 'Myakka_Shoes', qid: 'Q392', round: 8 },
		{ playerName: 'Myakka_Shoes', qid: 'Q733027', round: 9 },
		{ playerName: 'Myakka_Shoes', qid: 'Q342778', round: 10 },
		{ playerName: 'Myakka_Shoes', qid: 'Q264748', round: 11 },
		{ playerName: 'Myakka_Shoes', qid: 'Q22686', round: 12 },
		{ playerName: 'Myakka_Shoes', qid: 'Q1806985', round:13 },
		{ playerName: 'Myakka_Shoes', qid: 'Q22073413', round: 14 },
		{ playerName: 'Myakka_Shoes', qid: 'Q228928', round: 15 },
		{ playerName: 'Myakka_Shoes', qid: 'Q55610884', round: 16 },
		{ playerName: 'Myakka_Shoes', qid: 'Q164351', round: 17 },
		{ playerName: 'Myakka_Shoes', qid: 'Q55010', round: 18 },
		{ playerName: 'Myakka_Shoes', qid: 'Q181799', round: 19 },
		{ playerName: 'Myakka_Shoes', qid: 'Q41163', round: 20 },
		{ playerName: 'Myakka_Shoes', qid: 'Q109324', round: 21 },
		{ playerName: 'Myakka_Shoes', qid: 'Q359416', round: 22 },
		{ playerName: 'Myakka_Shoes', qid: 'Q183492', round: 23 },
		{ playerName: 'Myakka_Shoes', qid: 'Q105221', round: 24 },
		{ playerName: 'Myakka_Shoes', qid: 'Q358345', round: 25 },
		{ playerName: 'Aristimuno', qid: 'Q310295', round: 1 },
		{ playerName: 'Aristimuno', qid: 'Q714', round: 2 },
		{ playerName: 'Aristimuno', qid: 'Q170510', round: 3 },
		{ playerName: 'Aristimuno', qid: 'Q449612', round: 4 },
		{ playerName: 'Aristimuno', qid: 'Q6279', round: 5 },
		{ playerName: 'Aristimuno', qid: 'Q54527', round: 6 },
		{ playerName: 'Aristimuno', qid: 'Q230151', round: 7 },
		{ playerName: 'Aristimuno', qid: 'Q11171', round: 8 },
		{ playerName: 'Aristimuno', qid: 'Q57272', round: 9 },
		{ playerName: 'Aristimuno', qid: 'Q188280', round: 10 },
		{ playerName: 'Aristimuno', qid: 'Q232059', round: 11 },
		{ playerName: 'Aristimuno', qid: 'Q310394', round: 12 },
		{ playerName: 'Aristimuno', qid: 'Q234695', round: 13 },
		{ playerName: 'Aristimuno', qid: 'Q359442', round: 14 },
		{ playerName: 'Aristimuno', qid: 'Q200586', round: 15 },
		{ playerName: 'Aristimuno', qid: 'Q4028', round: 16 },
		{ playerName: 'Aristimuno', qid: 'Q232837', round: 17 },
		{ playerName: 'Aristimuno', qid: 'Q189599', round: 18 },
		{ playerName: 'Aristimuno', qid: 'Q315090', round: 19 },
		{ playerName: 'Aristimuno', qid: 'Q230728', round: 20 },
		{ playerName: 'Aristimuno', qid: 'Q16296', round: 21 },
		{ playerName: 'Aristimuno', qid: 'Q230218', round: 22 },
		{ playerName: 'Aristimuno', qid: 'Q343983', round: 23 },
		{ playerName: 'Aristimuno', qid: 'Q259441', round: 24 },
		{ playerName: 'Aristimuno', qid: 'Q212879', round: 25 },
		{ playerName: 'Malatlian', qid: 'Q12908', round: 1 },
		{ playerName: 'Malatlian', qid: 'Q193368', round: 2 },
		{ playerName: 'Malatlian', qid: 'Q285536', round: 3 },
		{ playerName: 'Malatlian', qid: 'Q183337', round: 4 },
		{ playerName: 'Malatlian', qid: 'Q313392', round: 5 },
		{ playerName: 'Malatlian', qid: 'Q465632', round: 6 },
		{ playerName: 'Malatlian', qid: 'Q5105', round: 7 },
		{ playerName: 'Malatlian', qid: 'Q919527', round: 8 },
		{ playerName: 'Malatlian', qid: 'Q131285', round: 9 },
		{ playerName: 'Malatlian', qid: 'Q312514', round: 10 },
		{ playerName: 'Malatlian', qid: 'Q553436', round: 11 },
		{ playerName: 'Malatlian', qid: 'Q29032', round: 12 },
		{ playerName: 'Malatlian', qid: 'Q1111542', round: 13 },
		{ playerName: 'Malatlian', qid: 'Q6145366', round: 14 },
		{ playerName: 'Malatlian', qid: 'Q9094', round: 15 },
		{ playerName: 'Malatlian', qid: 'Q1173157', round: 16 },
		{ playerName: 'Malatlian', qid: 'Q211111', round: 17 },
		{ playerName: 'Malatlian', qid: 'Q2513293', round: 18 },
		{ playerName: 'Malatlian', qid: 'Q267175', round: 19 },
		{ playerName: 'Malatlian', qid: 'Q11975', round: 20 },
		{ playerName: 'Malatlian', qid: 'Q271348', round: 21 },
		{ playerName: 'Malatlian', qid: 'Q302762', round: 22 },
		{ playerName: 'Malatlian', qid: 'Q540248', round: 23 },
		{ playerName: 'Malatlian', qid: 'Q310383', round: 24 },
		{ playerName: 'Malatlian', qid: 'Q6308207', round: 25 },
		{ playerName: 'Clancy', qid: 'Q59215', round: 1 },
		{ playerName: 'Clancy', qid: 'Q43203', round: 2 },
		{ playerName: 'Clancy', qid: 'Q39792', round: 3 },
		{ playerName: 'Clancy', qid: 'Q103578', round: 4 },
		{ playerName: 'Clancy', qid: 'Q456055', round: 5 },
		{ playerName: 'Clancy', qid: 'Q232298', round: 6 },
		{ playerName: 'Clancy', qid: 'Q259998', round: 7 },
		{ playerName: 'Clancy', qid: 'Q2252', round: 8 },
		{ playerName: 'Clancy', qid: 'Q310493', round: 9 },
		{ playerName: 'Clancy', qid: 'Q454088', round: 10 },
		{ playerName: 'Clancy', qid: 'Q234086', round: 11 },
		{ playerName: 'Clancy', qid: 'Q193635', round: 12 },
		{ playerName: 'Clancy', qid: 'Q37079', round: 13 },
		{ playerName: 'Clancy', qid: 'Q130088', round: 14 },
		{ playerName: 'Clancy', qid: 'Q3441473', round: 15 },
		{ playerName: 'Clancy', qid: 'Q259536', round: 16 },
		{ playerName: 'Clancy', qid: 'Q271109', round: 17 },
		{ playerName: 'Clancy', qid: 'Q313992', round: 18 },
		{ playerName: 'Clancy', qid: 'Q26806', round: 19 },
		{ playerName: 'Clancy', qid: 'Q319610', round: 20 },
		{ playerName: 'Clancy', qid: 'Q311314', round: 21 },
		{ playerName: 'Clancy', qid: 'Q232541', round: 22 },
		{ playerName: 'Clancy', qid: 'Q1687792', round: 23 },
		{ playerName: 'Clancy', qid: 'Q3421728', round: 24 },
		{ playerName: 'Clancy', qid: 'Q449649', round: 25 },
		{ playerName: 'Thomas', qid: 'Q216936', round: 1 },
		{ playerName: 'Thomas', qid: 'Q355522', round: 2 },
		{ playerName: 'Thomas', qid: 'Q2680', round: 3 },
		{ playerName: 'Thomas', qid: 'Q329807', round: 4 },
		{ playerName: 'Thomas', qid: 'Q104266', round: 5 },
		{ playerName: 'Thomas', qid: 'Q52392', round: 6 },
		{ playerName: 'Thomas', qid: 'Q618233', round: 7 },
		{ playerName: 'Thomas', qid: 'Q255565', round: 8 },
		{ playerName: 'Thomas', qid: 'Q287607', round: 9 },
		{ playerName: 'Thomas', qid: 'Q218718', round: 10 },
		{ playerName: 'Thomas', qid: 'Q312081', round: 11 },
		{ playerName: 'Thomas', qid: 'Q128121', round: 12 },
		{ playerName: 'Thomas', qid: 'Q170587', round: 13 },
		{ playerName: 'Thomas', qid: 'Q103939', round: 14 },
		{ playerName: 'Thomas', qid: 'Q170581', round: 15 },
		{ playerName: 'Thomas', qid: 'Q15935', round: 16 },
		{ playerName: 'Thomas', qid: 'Q7407424', round: 17 },
		{ playerName: 'Thomas', qid: 'Q36268', round: 18 },
		{ playerName: 'Thomas', qid: 'Q178552', round: 19 },
		{ playerName: 'Thomas', qid: 'Q503013', round: 20 },
		{ playerName: 'Thomas', qid: 'Q56226', round: 21 },
		{ playerName: 'Thomas', qid: 'Q726335', round: 22 },
		{ playerName: 'Thomas', qid: 'Q10479', round: 23 },
		{ playerName: 'Thomas', qid: 'Q380433', round: 24 },
		{ playerName: 'Thomas', qid: 'Q310586', round: 25 },
		{ playerName: 'Schemenauer', qid: 'Q531599', round: 1 },
		{ playerName: 'Schemenauer', qid: 'Q213512', round: 2 },
		{ playerName: 'Schemenauer', qid: 'Q144622', round: 3 },
		{ playerName: 'Schemenauer', qid: 'Q133151', round: 4 },
		{ playerName: 'Schemenauer', qid: 'Q65932', round: 5 },
		{ playerName: 'Schemenauer', qid: 'Q1124', round: 6 },
		{ playerName: 'Schemenauer', qid: 'Q117012', round: 7 },
		{ playerName: 'Schemenauer', qid: 'Q467519', round: 8 },
		{ playerName: 'Schemenauer', qid: 'Q123351', round: 9 },
		{ playerName: 'Schemenauer', qid: 'Q51552', round: 10 },
		{ playerName: 'Schemenauer', qid: 'Q7747', round: 11 },
		{ playerName: 'Schemenauer', qid: 'Q295847', round: 12 },
		{ playerName: 'Schemenauer', qid: 'Q442250', round: 13 },
		{ playerName: 'Schemenauer', qid: '1378213', round: 14 },
		{ playerName: 'Schemenauer', qid: 'Q53944', round: 15 },
		{ playerName: 'Schemenauer', qid: 'Q4355654', round: 16 },
		{ playerName: 'Schemenauer', qid: 'Q157054', round: 17 },
		{ playerName: 'Schemenauer', qid: 'Q344977', round: 18 },
		{ playerName: 'Schemenauer', qid: 'Q171736', round: 19 },
		{ playerName: 'Schemenauer', qid: 'Q152843', round: 20 },
		{ playerName: 'Schemenauer', qid: 'Q42930', round: 21 },
		{ playerName: 'Schemenauer', qid: 'Q458464', round: 22 },
		{ playerName: 'Schemenauer', qid: 'Q22316', round: 23 },
		{ playerName: 'Schemenauer', qid: 'Q9049', round: 24 },
		{ playerName: 'Schemenauer', qid: 'Q237560', round: 25 },
		{ playerName: 'Acosta', qid: 'Q367825', round: 1 },
		{ playerName: 'Acosta', qid: 'Q294531', round: 2 },
		{ playerName: 'Acosta', qid: 'Q46809', round: 3 },
		{ playerName: 'Acosta', qid: 'Q43274', round: 4 },
		{ playerName: 'Acosta', qid: 'Q95026', round: 5 },
		{ playerName: 'Acosta', qid: 'Q111240', round: 6 },
		{ playerName: 'Acosta', qid: 'Q318965', round: 7 },
		{ playerName: 'Acosta', qid: 'Q108886', round: 8 },
		{ playerName: 'Acosta', qid: 'Q278656', round: 9 },
		{ playerName: 'Acosta', qid: 'Q441214', round: 10 },
		{ playerName: 'Acosta', qid: 'Q161819', round: 11 },
		{ playerName: 'Acosta', qid: 'Q47213', round: 12 },
		{ playerName: 'Acosta', qid: 'Q4909771', round: 13 },
		{ playerName: 'Acosta', qid: 'Q1066551', round: 14 },
		{ playerName: 'Acosta', qid: 'Q43252', round: 15 },
		{ playerName: 'Acosta', qid: 'Q112284', round: 16 },
		{ playerName: 'Acosta', qid: 'Q205721', round: 17 },
		{ playerName: 'Acosta', qid: 'Q2916869', round: 18 },
		{ playerName: 'Acosta', qid: 'Q711921', round: 19 },
		{ playerName: 'Acosta', qid: 'Q231178', round: 20 },
		{ playerName: 'Acosta', qid: 'Q1614313', round: 21 },
		{ playerName: 'Acosta', qid: 'Q713746', round: 22 },
		{ playerName: 'Acosta', qid: 'Q959635', round: 23 },
		{ playerName: 'Acosta', qid: 'Q6266745', round: 24 },
		{ playerName: 'Acosta', qid: 'Q25089', round: 25 },
		{ playerName: 'Dreier', qid: 'Q3874799', round: 1 },
		{ playerName: 'Dreier', qid: 'Q395274', round: 2 },
		{ playerName: 'Dreier', qid: 'Q5556756', round: 3 },
		{ playerName: 'Dreier', qid: 'Q73035', round: 4 },
		{ playerName: 'Dreier', qid: 'Q48259', round: 5 },
		{ playerName: 'Dreier', qid: 'Q355288', round: 6 },
		{ playerName: 'Dreier', qid: 'Q206112', round: 7 },
		{ playerName: 'Dreier', qid: 'Q469139', round: 8 },
		{ playerName: 'Dreier', qid: 'Q265852', round: 9 },
		{ playerName: 'Dreier', qid: 'Q171905', round: 10 },
		{ playerName: 'Dreier', qid: 'Q529294', round: 11 },
		{ playerName: 'Dreier', qid: 'Q317521', round: 12 },
		{ playerName: 'Dreier', qid: 'Q196560', round: 13 },
		{ playerName: 'Dreier', qid: 'Q172155', round: 14 },
		{ playerName: 'Dreier', qid: 'Q21066012', round: 15 },
		{ playerName: 'Dreier', qid: 'Q217298', round: 16 },
		{ playerName: 'Dreier', qid: 'Q41812531', round: 17 },
		{ playerName: 'Dreier', qid: 'Q42869', round: 18 },
		{ playerName: 'Dreier', qid: 'Q365042', round: 19 },
		{ playerName: 'Dreier', qid: 'Q440256', round: 20 },
		{ playerName: 'Dreier', qid: 'Q37175', round: 21 },
		{ playerName: 'Dreier', qid: 'Q167696', round: 22 },
		{ playerName: 'Dreier', qid: 'Q956100', round: 23 },
		{ playerName: 'Dreier', qid: 'Q107452007', round: 24 },
		{ playerName: 'Dreier', qid: 'Q451910', round: 25 },
		{ playerName: 'Shoemaker', qid: 'Q212002', round: 1 },
		{ playerName: 'Shoemaker', qid: 'Q3240869', round: 2 },
		{ playerName: 'Shoemaker', qid: 'Q48337', round: 3 },
		{ playerName: 'Shoemaker', qid: 'Q6294', round: 4 },
		{ playerName: 'Shoemaker', qid: 'Q235975', round: 5 },
		{ playerName: 'Shoemaker', qid: 'Q12003', round: 6 },
		{ playerName: 'Shoemaker', qid: 'Q2808', round: 7 },
		{ playerName: 'Shoemaker', qid: 'Q54545', round: 8 },
		{ playerName: 'Shoemaker', qid: 'Q5944264', round: 9 },
		{ playerName: 'Shoemaker', qid: 'Q194045', round: 10 },
		{ playerName: 'Shoemaker', qid: 'Q633263', round: 11 },
		{ playerName: 'Shoemaker', qid: 'Q185051', round: 12 },
		{ playerName: 'Shoemaker', qid: 'Q922169', round: 13 },
		{ playerName: 'Shoemaker', qid: 'Q150943', round: 14 },
		{ playerName: 'Shoemaker', qid: 'Q2685', round: 15 },
		{ playerName: 'Shoemaker', qid: 'Q2599', round: 16 },
		{ playerName: 'Shoemaker', qid: 'Q310926', round: 17 },
		{ playerName: 'Shoemaker', qid: 'Q184572', round: 18 },
		{ playerName: 'Shoemaker', qid: 'Q20178', round: 19 },
		{ playerName: 'Shoemaker', qid: 'Q982182', round: 20 },
		{ playerName: 'Shoemaker', qid: 'Q39829', round: 21 },
		{ playerName: 'Shoemaker', qid: 'Q215072', round: 22 },
		{ playerName: 'Shoemaker', qid: 'Q25014', round: 23 },
		{ playerName: 'Shoemaker', qid: 'Q365144', round: 24 },
		{ playerName: 'Shoemaker', qid: 'Q29250', round: 25 },
            ];

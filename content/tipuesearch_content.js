var tipuesearch = {"pages": [{'title': '簡介', 'text': '產品協同設計課程第二組 \n 倉儲位置 \n Blogger \n 評分表單 \n', 'tags': '', 'url': '簡介.html'}, {'title': '組員名單與網站', 'text': '周政叡-40423218   心得 \n 陳柏維-40423136\xa0心得 \n 40423160\xa0心得 \n 吳隆廷-40623115   心得 \n 陳鉅忠-40623130 \xa0  心得 \n 蕭家翰-40623133   心得 \n 許高惟-40623139  \xa0 心得 \n 郭益綸- 40623142   心得 \n 林暉恩- 40623145   心得 \n \xa0  劉 奇\xa0 -40623146   心得 \n', 'tags': '', 'url': '組員名單與網站.html'}, {'title': 'Task-1', 'text': 'Web \n 取分項目 -工作分配表於3/18開會時分配 \n \n \n \n 第一項 \n 陳鉅忠 \n \n \n 第二項 \n 吳隆廷、郭益綸 \n \n \n 第三項 \n 許高惟、蕭家翰 、林暉恩 \n \n \n \n 若有不小心遺忘的請自行補齊 \n', 'tags': '', 'url': 'Task-1.html'}, {'title': '自定義隨身系統', 'text': '除了老師所提到的幾個重要的程式外，我們還加入老師提起的 Range_Software3 的分析軟體以及自己會用到的電路圖繪製軟體 Fritzing \n \n 都解壓縮完並設定好start批次檔時長這樣 \n \n', 'tags': '', 'url': '自定義隨身系統.html'}, {'title': 'Range_Software3', 'text': 'Github - 老師網誌 \n 是個結合了許多分析又可以繪圖的軟體，但對於操作完全不熟悉 \n \n', 'tags': '', 'url': 'Range_Software3.html'}, {'title': 'Fritzing', 'text': '官網 --- 下載 -Windows x64\xa0 Version------ 0.9.3b \xa0 was released on \xa0 June 2, 2016 . \n 我們會選擇此軟體的原因 \n 其一 : 電路學上課時老師推薦過 \n 其二 : 此程式可以編譯至可攜系統中 \n 其三 : 包含了許多大廠的板子且可用code編譯 \n 其四:可調成中文 \n \n', 'tags': '', 'url': 'Fritzing.html'}, {'title': '介紹影片', 'text': '周政叡-40423218 影片 \n 陳柏維-40423136  影片(雜音偏多 \n 40423160\xa0 影片 \n 吳隆廷-40623115\xa0 影片 \n 陳鉅忠-40623130\xa0  影片 (聲音偏小 \n 蕭家翰-40623133   影片 \n 許高惟-40623139 \xa0 影片 \n 郭益綸- 40623142   影片 \n 林暉恩- 40623145   影片 \n \xa0 劉 奇\xa0 -40623146\xa0 影片 \n', 'tags': '', 'url': '介紹影片.html'}, {'title': '隨機分組介面成品', 'text': '算是半成品的GUI介面 \xa0。 \xa0\xa0------>  成品 \n 說是半成品理由是 太多的理想面想法但能力不足... 我要把自己淘汰掉了。 \n 原本來想設計有存檔 、分行、直接編輯等功能 , 但真的沒那個能力可能要問問學長他們 , 之後還想轉成.exe檔 , 但現階段光下載 \xa0 pyinstaller 就一堆error啦...而且也要換成pyside2了可能就先放著去研究其他東西吧。 \n 還想用個GUI介面 , 是關於start.bat的 , 點擊後只跳出黑白窗各一個&一個點擊介面可以直接叫各程式的介面然後還能自己添加程式的功能 ( ( ( 科技進步出於人類的慾望--懶惰。 \n ----------------------------------------------------------- \n 利用大一學過的eric6設計生成的介面code \n \n 這段code位於Ui_task.py下方 , 主要是為了與下方程式task.py作聯結的code \n \n 按鈕主要的code設計 , 部分作小修改 \n PBsave鈕目前只有裝飾功能 , 尚未編譯 \n \n 這是執行後面介面樣子 \n \n 執行.txt檔後分出的組別排序 , 意想不到的是竟然可以讀取中文檔名的文件 \n \n', 'tags': '', 'url': '隨機分組介面成品.html'}, {'title': 'Combine1.1&1.2', 'text': '測試結合  項目一 以及 項目二 \xa0, 其結果是只顯示出組長 \n \n 問題 :\xa0 \n eric6底下出現 " Qt: Untested Windows version 10.0 detected! " 此\xa0 連結 \xa0或許能改善 , 還在測試 \n', 'tags': '', 'url': 'Combine1.1&1.2.html'}, {'title': '成品', 'text': '完成啦 - 69MB左右。 \n 完全沒想到轉成exe檔會大成這樣... \n 不過上星期到這次改版差了很多,不但整合了項目一與二 , 還修改了save as 按鈕(可用) , 還轉成了exe檔...很難想像因為一個enter換行導致一串的bug , 不過還是成功修改好了。 \n 改版Save as 按鈕成可用code , 並可直接存成.txt檔案 之後利用 pyinstaller(官方下載說明頁面) 測試看看能否轉py成exe檔案 , 但是明顯的出了幾個bug (1) cffi 過舊或是未安裝 --->需更新檔案---->pip cffi 就可以了\xa0 \xa0 \xa0( 沒記錯的話 (2)接下來是下方這個 , 黑窗表示 : 語法錯誤 \n \n 上網查後發現是下方這個.py檔的198行的空白行的問題... \n 刪除開白行即可 \n 之後就可正常用行囉 , pyinstaller會生成很多檔案而主要的exe檔在dist資料夾中 \n \n 之後到要轉檔的目錄位置打 pyinstaller -F -w -i 圖.ico 主程式.py -p 其餘程式\xa0-p 其餘程式\xa0\xa0-p 其餘程式\xa0\xa0-p 其餘程式\xa0 \n 以下為pyinstaller常用參數介紹 \n \n pyinstaller -h 來查看參數 \n -F : 打包成一個exe文件 \n –i 圖.ico : 更改ico圖示 \n -w : 使用視窗，無控制台 \n -c : 使用控制台，無視窗 \n -D : 創建一個目錄，包含exe以及其他一些依賴性文件 \n \n \n 完成品~ \n \n', 'tags': '', 'url': '成品.html'}, {'title': '分組程式修正', 'text': '在利用亂數分組, 能否根據已經完成的主程式, 編寫一個網際程式或單機 PyQt5 程式, 讀進相關資料檔案後, 在瀏覽器或 PYQt5 程式中顯示出結果. \n import random\nfilename = \'cdbw3_student_list.txt\'\n# 每組人數\nnum_in_one_group = 11\n# 組序由 1 開始\ngroup = 1\n# 各班分組後所得數列\nc2019 = []\nwith open(filename) as f:\n    # 讀進全部檔案, 轉進數列, 並同時將各行的 \\n 去除\n    read_data = f.read().splitlines() \nprint("共有 " + str(len(read_data)) + " 位學員")\n# 利用 shuffle 將數列隨機弄亂\nrandom.shuffle(read_data)\nfor i in range(len(read_data)):\n    # 利用整數相除的餘數進行分組\n    if i%num_in_one_group == 0:\n        # 列出分隔符號\n        print("-"*20)\n        print("group " + str(group) +":")\n        # 在分組區隔時重置各組學員數列\n        group_list = []\n        print()\n        # 同時列出與分隔標註對應 i 的數列內容\n        print(read_data[i])\n        group_list.append(read_data[i])\n        group = group + 1\n    else:\n        # 逐一列出同組的其他學員\n        print(read_data[i])\n        group_list.append(read_data[i])\n    if i%num_in_one_group == 0:\n        c2019.append(group_list)\n# c2019 為該班分組後所得分組數列\nprint(c2019) \n 原始程式只有將檔案cdbw3_student_list.txt讀進Python程式中做亂數分組 \n import random\nfilename = \'cdbw3_student_list.txt\'\n# 每組人數\nnum_in_one_group = 8\n# 組序由 1 開始\ngroup = 1\n# 各班分組後所得數列\nc2019 = []\nwith open(filename) as f:\n    # 讀進全部檔案, 轉進數列, 並同時將各行的 \\n 去除\n    read_data = f.read().splitlines() \nprint("共有 " + str(len(read_data)) + " 位學員")\n# 利用 shuffle 將數列隨機弄亂\nrandom.shuffle(read_data)\nfor i in range(len(read_data)):\n    # 利用整數相除的餘數進行分組\n    if i%num_in_one_group == 0:\n        # 列出分隔符號\n        print("-"*20)\n        print("group " + str(group) +":")\n        # 在分組區隔時重置各組學員數列\n        group_list = []\n        print()\n        # 同時列出與分隔標註對應 i 的數列內容\n        group_list.append(read_data[i])\n        group = group + 1\n        print("Leader:"+read_data[i])\n    else:\n        print("Member:"+read_data[i])\n    if i%num_in_one_group == 0:\n        c2019.append(group_list)\n# c2019 為該班分組後所得分組數列\n\nprint("Group_leader"+str(c2019)) \n \n 在i 迴圈當中加入if i %num_in_one_group == 0: 檢驗ｉ除上組員數量是否=0 \n 假設等於0\xa0 \xa0 (整除無餘數) \n print("Leder:"+read_data[i])組長應是第一位選出來(read_data[i]) \n 假設不等於0\xa0 \xa0 (無整除) \n else: 其他的人為組員("Member:"+read_data[i]) \n 結果如下 \n \n 最下方為各組組長的顯示結果 \n', 'tags': '', 'url': '分組程式修正.html'}, {'title': 'ungit使用手冊', 'text': '老師的影片: \n \n 1.下載 ungit 與 node.js 程式碼 首先下載 \xa0 kmol_2019.7z , 接著再下載 \xa0 nodejs_with_ungit.7z , 兩者分別解開壓縮檔案, 然後將 nodejs 放入 kmol_2019 的 data 目錄中. \n 2.設定命令列搜尋路徑 \n 接下來設定啟動 start.bat 中的 ungit 命列列搜尋路徑: \n 新增 set path8=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; (抓取nodejs主程式路徑) \n path=%path%;%path1%;%path2%;%path3%;%path4%;%path5%;%path6%;%path7%;%Disk%:\\p37\\site-packages\\scipy\\extra_dll;%Disk%:\\scite\\bin; %path8%; \n \n 3.設定 USERPROFILE 環境變數 \n 讓 node.js 能夠使用 y:\\home 作為使用者目錄, 在 start.bat 中加入 set USERPROFILE=%Disk%:\\home \n \n 4. 以 SciTE 編輯器存入 Y:\\kungit.bat 批次檔案中 \n 為了對應 "C:\\Program Files (x86)", 針對目前所在的倉儲目錄, 以 Google Chrome 瀏覽器開啟 ungit 的網際倉儲連結. \n 新增批次檔 \n ungit --launchBrowser=0 --launchCommand "C:\\PROGRA~2\\Google\\Chrome\\Application\\chrome.exe\xa0 %%U" \n (指令內的PROGRA~2為Program file(x86)之縮寫，此外PROGRA~1為Program Flies縮寫) \n 為了跟ungit做一個區別批次檔名稱改成kungit並存在y:/底下 \n \n \n 5.開啟 start.bat， 輸入 kungit 後，會在瀏覽器中開啟ungit頁面 \n \n 6.利用ungit進行協同作業比原本使用cmd來的快速也較容易能判斷版本之間的改動 \n \n Title :可以輸入中文標題 \n Body :可以增加內容 讓其他協同組員知道這個版本增加什麼 \n Commit按鈕 : 可以不使用cmd指令就直接commit以節省時間 \n \n Push按鍵 : commit完成之後只要按版本旁邊的push就能將版本推到遠端 \n \n 每項commit在紅框內的視窗都有檔案的詳細資訊 \n 總結 : 這真的很方便， 唯二碰到的問題都是start的路徑沒有設定好 \n', 'tags': '', 'url': 'ungit使用手冊.html'}, {'title': '問題', 'text': '問題一 : Scite一直出現此錯誤且作者目前無解的問題 1.   2. \n \n 問題二 : Range 及 Fritzing 要存取檔時無法讀取Y槽，但是!!還是可以用? \n \n 問題三:ungit錯誤，結果是網路的問題! \n \n', 'tags': '', 'url': '問題.html'}, {'title': 'Task-2', 'text': 'Web \n', 'tags': '', 'url': 'Task-2.html'}, {'title': 'Vrep', 'text': 'BubbleRob \n 教學WEB \n \n 可作動 \n BubbleRob操作手冊 \n 1.建立BubbleRob本體 新增一個 Sphere ， X-size 為 0.2( 單位為m) 在 object common properties 下的 object special properties (特殊屬性參數)將 Collidable(可碰撞)、Measurable(可測量)、Renderable(可渲染)、Detectable(可檢測) 都打勾，將本體位置設定在Z軸(Along Z)0.02(必須確認本體是依照world去移動) 接著在選單雙擊Sphere將物件名稱改為BubbleRob就完成本體設定。 \n \n 2.建立Proxmity sensor(接近傳感器) 在選單中建立一個 Proximity sensor 且選為 Cone type (錐形) \n 將sensor利用旋轉功能在 Around Y及Z 輸入 90 位置為 X-coord 輸入 0.1 及 Z-coord 輸入 0.12 \n \n \n 接著設定sensor感應範圍，在選單點擊感測器符號開啟它的設定框，點擊 show volume\xa0 \n parameter (體積參數)開啟選單設定 Offset=0.005、Angle=30、Range=0.15 \n \n 點擊 Show detection parameters (檢測參數)，將 "Don\'t allow detections if distance smaller than" 選項取消打勾。 \n 將感測器名稱設定為 bubbleRob_sensingNose ，就完成感測器設定了。 \n 在 Scene hireachy (場景等級)將完成設定的sensor放在bubbleRob下 \n 最後將兩項物件 Edit->"Make last selected object parent" 連結成一個物件。 \n 3.建立bubbleRob的輪子 \n 建立一個 cylinder 尺寸為(0.08,0.08,0.02)，跟本體一樣將 object common properties 內的特殊屬性都打開，設定位置(0.05,0.1,0.04)和旋轉(-90,0,0)，此物件命名為 bubbleRob_leftWheel ，然後將完成的物件複製一份且將位置參數Y設定為-0.1，此物件命名為 bubbleRob_RightWheel \n 設定 joint (motor) Add->joint->Revolute (迴轉)建立一個軸，建立完成按住ctrl選擇剛剛的 bubbleRob_leftWheel 然後在 postion (位置)及 \xa0 orientation (方向)內選擇 apply to selection 來複製輪子的參數，這樣軸的位置就會跟左邊輪子一樣了。 點擊開啟軸參數的設定框，將 \xa0Show dynamic parameters (動態參數)內的 enable the motor 以及底下的 Lock motor when target velocity is zero 都打勾，完成左邊輪軸設定後，用同樣方式製作右輪軸。 \n 最後將輪子層級放置在輪軸底下，輪軸層級則置於本體下 \n \n 4.建立slider(滑塊) 開始模擬後發現機器人會向後翻轉，因為少了第三個接地點 建立一個圓形物件(設定0.05)，一樣打開所有特殊屬性，將此物件命名為 \xa0bubbleRob_slider ，在 shape dynamics properties 裡將物件設定為 無摩擦 。 \n 摩擦力相關的係數都調成0 \n \n 接著建立 Force sensor (力感測器)命名為 bubbleRob_connection ，將它往上提0.05 ，再跟剛剛的滑塊接合成一個物件，這個物件的位置設定X=(-0.07)，此物件的層級則放在bubbleRob底下，這樣就完成第三個接地點了，但是執行模擬後會發現滑塊會微微震動，那是因為滑塊跟本體互相碰撞了，為了避免這種狀況，開啟滑塊及本體的 shape dynamics properties 將 local respondable mask 分別設定為00001111及 11110000這樣兩個物件就不會互相碰撞了。 \n 滑塊設定 \n \n 本體設定 \n \n 5.增加穩定性(stability)及目標速度( Target velocity )測試 點擊dynamic對話框內的 M=M*2 選項三次將輪子以及第三個支點的重量變成8倍，接著在軸的dynamic對話框將 Target velocity 設至50後開始演算，會發現bubbleRob會穩定的直線前進最後掉出平台，然後再將速度重置為0，測試就完成了。 \n \n 6. collection object (物品集)及 Calculation module properties (計算模組) 在collection對話框內用 Add new collection ，新增的集合是空的，將列表上的bubbleRob選擇後點選Add加進collection，命名為  bubbleRob_collection  ，這樣bubbleRob底下的零件都包含集合裡。 在選單點選 Calculation module 在 distance (距離)下 Add new distance object ， 選擇剛剛新增的 bubbleRob_collection 及 all other measurable objects in the scene ， 命名為 bubbleRob_distance ，這個設定在之後會測量本體以及其他可碰撞物件之間的最小距離。 \n \n 7.Graph(圖表)設定 新增一個Graph命名為 bubbleRob_graph 在列表上放置於bubbleRob底下將graph位置設定在(0,0,0.005)開啟graph properties，將 Display XYZ-planes 選項取消打勾，接著 Add new data stream to record ，視窗上方 (Data stream type) 選擇 Object: absolute x-position 下方 (Object / item to record) 選擇 bubbleRob_graph ，在 Data stream recording list 會出現剛剛新增的設定，Y軸跟Z軸也用同樣方式做設定。 \n 為了能夠測量機器人跟環境之間的最小距離再新增一個設定上面選擇 Distance:segment length 下方選擇 bubbleRob_distance 。 \n \n 將XYZ軸及距離設定分別命名為 bubbleRob_xpos、bubbleRob_ypos、bubbleRob_zpos、 bubbleRob_obstacle_dist 。 \n \n 選擇bubbleRob_xpos在底下的 Time graph properties 將Visible取消掉，其他兩軸也用相同方式操作。 \n 接著在 Edit 3D curves 點選  Add new curve 設定如圖 \n \n Curve width (線寬)設定為4，然後改成 Relative to world ，完成後測試就會發現機器人的路徑會以線顯示在螢幕上。 \n 8.建立cylinder \n 增加數個(0.1,0.1,0.2)的cylinder包圍bubbleRob，將cylinder的特殊屬性參數全部打開，移動cylinder途中按著shift可以進行更細微的移動，按住ctrl則可以讓物件可以在正交方向移動。 \n 9.model設定 選擇bubbleRob後在 object common properties 內將 Object is model base 和 Object/model can transfer or accept DNA 都打勾，這樣bubbleRob邊界框就包含底下所有的物件在內了。 \n \n 接著將兩個joint、sensor跟graph都選起來然後將參數設定 ignored by model bounding box ，讓模型的邊界框略過sensor跟joint然後將joint跟sensor的camera visibility layer 2取消打勾改為打勾10，這樣在畫面上就不會看見軸跟sensor範圍了，最後將感測器、兩個輪子、支點、圖表的 Select base of model instead 都打勾，這項設定讓我們只能一次移動整個機器人而不是單個零件，能避免定位好的零件被移動。 \n \n (vrep版本3.6.1沒有 Don\'t show as inside model selection 按鈕) \n 10.感測器(vision sensor) 增加一個新的感測器，位置、角度跟BubbleRob\'s proximity sensor同樣，在畫面上點選增加 Perspective type 的sensor，然後放到proximity sensor底下，新的sensor設定如下 \n \n 接著點擊 Show filter dialog 開啟filter對話框，選擇 Edge detection on work image 然後按 Add ，新增的過濾組件要上移至第二層，移動完後點擊兩下剛剛設定的組件將 Threshold (閾值)設定為0.2，設定到這邊基本上就完成了。 \n \n 完成sensor設定後新增一個 floating view 然後在它上面右鍵選擇 (view->Associate view with selected vision sensor) 將視窗綁定到剛剛設定完的sensor上(操作中間要確保sensor是被選擇的狀況)，接著試著開始模擬，視窗上能夠看見目標就成功了。 \n \n 11.程式: 位於工具列的script功能可以編輯code \n \n 最後的步驟要將code放進完成的模型內，選擇bubbleRob點選( Add->Associated child script --> Non threaded ) \n \n 新增一個 non-threaded child script ，接著點選bubbleRob旁邊的圖示(如附圖) 就能打開script，將code複製在原本的code後面關掉視窗就完成了。 \n \n 需注意code內部\xa0 \n \n leftMotor=sim.getObjectHandle(" bubbleRob_leftMotor ") -- Handle of the left motor rightMotor=sim.getObjectHandle(" bubbleRob_rightMotor ") -- Handle of the right motor noseSensor=sim.getObjectHandle(" bubbleRob_sensingNose ") -- Handle of the proximity sensor \xa0 紅框內的名稱，如果大小寫或是名稱不同程式就沒辦法成功執行。 \n \n 成功的bubbleRob在模擬時會自動避開路徑上的物件，並且畫面會有能調節速度的面板。 \n', 'tags': '', 'url': 'Vrep.html'}, {'title': 'Vrep-2', 'text': '試著用鍵盤的前後左右測試robot -\xa0 Download \n \n 參考網址: http://www.forum.coppeliarobotics.com/viewtopic.php?t=1575&p=6085#p6065 \n \n', 'tags': '', 'url': 'Vrep-2.html'}, {'title': 'week7測試物件', 'text': "測試用Vrep呼叫方向鍵的指令 \n \n \n (內建程式推不上去改用截圖放) \n ------------------------------------------------------------------------------------------------------------ \n 測試方向鍵於手足球的人偶自由度&code設定 :\xa0 \n RJ1 : 為人偶前後踢球的軸代稱\xa0 \\\xa0 RJ2 :\xa0 為控制人偶左右的桿子的軸代稱 \n 樹狀圖為gif中所表示 \n \n 下方為Lua code --->用於Vrep3.6.1版本中\xa0 \n function sysCall_init() \n    right_left_handle= sim.getObjectHandle('RJ1')\n    up_down_handle= sim.getObjectHandle('RJ2')\n    MaxVel=5\n    right_left_velocity=0\n    up_down_velocity=0\n    dVel=0.5;\n    sim.setJointTargetVelocity(right_left_handle,right_left_velocity)\n    sim.setJointTargetVelocity(up_down_handle,up_down_velocity)\nend\n\nfunction sysCall_actuation() \n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==32) then\n                -- right key\n                right_left_velocity=0\n                up_down_velocity=0\n                sim.setJointForce(right_left_handle, 0)\n                sim.setJointForce(up_down_handle, 0)\n                break\n            else\n                sim.setJointForce(right_left_handle, 10000)\n                sim.setJointForce(up_down_handle, 10000)\n            end\n            if (auxiliaryData[1]==2007) then\n                -- left key\n                right_left_velocity=right_left_velocity+dVel*1.3\n            end\n            if (auxiliaryData[1]==2008) then\n                -- right key\n                right_left_velocity=right_left_velocity-dVel*1.3\n            end\n            if (auxiliaryData[1]==2009) then\n                -- up key\n                up_down_velocity=up_down_velocity+dVel/10\n            end\n            if (auxiliaryData[1]==2010) then\n                -- down key\n                up_down_velocity=up_down_velocity-dVel/10\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n    \n    if right_left_velocity>MaxVel then\n        right_left_velocity=-5\n    end\n    if right_left_velocity<-MaxVel then\n        right_left_velocity=5\n    end\n    \n    if up_down_velocity>MaxVel then\n        up_down_velocity=0\n    end\n    if up_down_velocity<-MaxVel then\n        up_down_velocity=0\n    end\n    \n    sim.setJointTargetVelocity(right_left_handle,right_left_velocity)\n    sim.setJointTargetVelocity(up_down_handle,up_down_velocity)\n    \nend  \n 測試版本目前還未設定雙判定來改變控制的桿件(希望能行)&還有電腦的回擊也還沒寫入。 \n \n keyboard code 設定 {Unicode} :\xa0 \n http://www.runoob.com/try/try.php?filename=tryjsref_event_key_keycode \n \n", 'tags': '', 'url': 'week7測試物件.html'}, {'title': 'week8測試物件', 'text': '\n 嘗試將兩軸分開控制，由於我們是利用加速度來驗算所以在編寫code方面較為複雜，目標為利用鍵盤按鍵分別控制各軸，達成一次控制一軸且可切換之目標。 \n', 'tags': '', 'url': 'week8測試物件.html'}, {'title': 'Onshape', 'text': '圖檔位置 \n (1) 人形 : \n https://cad.onshape.com/documents/8c0be159fdc3c8e13fb701bf/w/d1d5f612592d280c6171a6b4/e/af8ccadea4c6f59a5ea6537c \n \n (2) 場地:\xa0 \n \xa0 https://cad.onshape.com/documents/0894dee7161cb625fbf66c24/w/dd82ba727b43d8551157d048/e/4e12526592dd2e271bca4ad7 \n \n 場地零件: \n \n \n \n \n 球: \n \n 場地增加: \n \n (3) 完成品:\xa0 \n \n 後來發現其實直接畫在一個零件裡就夠了,不然有些地方很難修改 \n 於是我們將場地精簡成這樣 \n \n 最終版本: \n \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'Extra-add', 'text': '擋球軌道 : \n https://cad.onshape.com/documents/4984320cf758c826a317595a/w/c314b8f3e5b6a9397411a635/e/56767dcb9a4bb6e5aa635f63 \n \n', 'tags': '', 'url': 'Extra-add.html'}, {'title': 'Final-handball', 'text': '尚未完成部分 :\xa0 \n \n \n \n 1 . 電腦操控一支桿件的回擊程式編譯 \n \n \n 2 .電腦操控多支桿件的回擊程式編譯 \n \n \n 3 . 玩家對桿件的切換程式編譯 \n \n \n 4 . 導球機構 \n \n \n 5 . \xa0 簡化 \n \n \n 6 . 計分設計 \n \n \n \n \n 不簡化的下場...死機十幾分鐘以上 \n 以下僅外觀 , 使用請小心 7z \n', 'tags': '', 'url': 'Final-handball.html'}]};